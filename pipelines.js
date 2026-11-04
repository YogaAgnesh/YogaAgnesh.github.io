/* Authored architecture summaries. Planned flows are not production telemetry. */
const pipelineBlueprints={
 lakehouse:{label:'Lakehouse architecture',lanes:[[
  ['source','Olist CSV files','Orders · items · payments','Source'],
  ['databricks','Bronze tables','Raw records + provenance','Ingest'],
  ['apachespark','Silver tables','Types · keys · join grain','Transform']
 ],[
  ['deltalake','Gold marts','Order grain · business KPIs','Model'],
  ['powerbi','Power BI','Revenue · delivery analysis','Serve']
 ]],bridge:'Validated records → curated Delta marts',controls:['Key integrity','Safe reruns','Metric reconciliation']},
 streaming:{label:'Event processing architecture',lanes:[[
  ['python','Event generator','Parcel IDs · event timestamps','Produce'],
  ['apachekafka','Kafka topics','Partition key: parcel_id','Transport'],
  ['python','Python consumer','Validate · dedupe · persist','Process']
 ],[
  ['databricks','Databricks replay','PySpark + Delta processing','Replay'],
  ['deltalake','Parcel status mart','Late-event corrections','Serve']
 ]],bridge:'Local archive files → manual upload to Databricks',controls:['Commit after write','Replay recovery','Invalid-event handling']},
 migration:{label:'Change-data-capture architecture',lanes:[[
  ['postgresql','PostgreSQL','Invoices · payments · plans','Source'],
  ['source','Debezium Engine','Snapshot + change log','Capture'],
  ['ingest','Durable segments','Source positions + manifest','Persist']
 ],[
  ['deltalake','Delta tables','Current state + SCD Type 2','Apply'],
  ['serve','Reconciliation','Keys · amounts · history','Validate']
 ]],bridge:'Captured files → explicit transfer to Databricks',controls:['Matched source frontier','Delete handling','Gated reporting cutover']},
 architecture:{label:'Proposed platform architecture',lanes:[[
  ['source','Batch + events','Operational data sources','Sources'],
  ['ingest','Ingestion boundary','Contracts · replay positions','Ingest'],
  ['store','Raw data storage','Retention · recovery boundary','Retain']
 ],[
  ['transform','Processing layer','Batch · incremental · stream','Compute'],
  ['serve','Serving layer','Documented analytical data','Consume']
 ]],bridge:'Retained data → workload-specific processing',controls:['Access & ownership','Observability & recovery','Capacity & cost']},
 'customer-revenue':{label:'Customer analytics workflow',lanes:[[
  ['source','Transactions','Three years of source data','Source'],
  ['databricks','Databricks','SQL · PySpark · cohorts','Model'],
  ['tableau','Tableau','Customer segmentation','Analyze']
 ]],controls:['Cohort logic','Window functions','Interactive LODs']},
 'sales-platform':{label:'Revenue reporting workflow',lanes:[[
  ['databricks','Databricks tables','Analytical source datasets','Source'],
  ['transform','SQL models','Denormalized analytical layer','Model'],
  ['powerbi','Power BI','DAX · drillthrough · RLS','Analyze']
 ]],controls:['Weighted pipeline','Win-rate trends','Row-level security']}
};
function pipelineNodeIcon(key){return ['source','ingest','store','transform','serve'].includes(key)?objectIcon(key):`<img src="brands/${key}.svg" alt="" width="32" height="32" loading="lazy">`;}
function pipelineVisual(p,professional=false){const b=pipelineBlueprints[p.id];return `<div class="pipeline-diagram" aria-label="${b.label}"><div class="pipeline-heading"><span>${b.label}</span><small>${professional?'Résumé-based illustration':p.existing?'Existing design':'Proposed design'}</small></div>${b.lanes.map((lane,i)=>`${i?`<div class="pipeline-transfer"><span aria-hidden="true">↓</span>${b.bridge}</div>`:''}<ol class="pipeline-lane">${lane.map(([icon,title,detail,phase])=>`<li class="pipeline-node"><span class="pipeline-phase">${phase}</span><span class="pipeline-icon">${pipelineNodeIcon(icon)}</span><strong>${title}</strong><span class="pipeline-detail">${detail}</span></li>`).join('')}</ol>`).join('')}<div class="pipeline-controls"><span class="pipeline-control-icon" aria-hidden="true">✓</span>${b.controls.map(s=>`<span>${s}</span>`).join('')}</div></div>`;}
projectVisual=p=>pipelineVisual(p);
professionalVisual=p=>pipelineVisual(p,true);

/* One future URL per project. Null retains the explicitly labeled example URL. */
const repositoryUrls={lakehouse:null,streaming:null,migration:null,architecture:null,'customer-revenue':null,'sales-platform':null};
function repositoryAction(p){const url=repositoryUrls[p.id];const placeholder=!url;return `<a class="repository-link" href="${url||`https://github.com/example/${p.repo||p.id}`}" target="_blank" rel="noopener noreferrer" aria-label="Go to GitHub repository for ${p.title}${placeholder?' — placeholder':''}"><img src="brands/github.svg" alt="" width="22" height="22"><span>Go to GitHub repository${placeholder?'<small>Placeholder · link coming soon</small>':''}</span><span aria-hidden="true">↗</span></a>`;}
