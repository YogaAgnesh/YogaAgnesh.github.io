# Prism 3D Studio — case-study evidence

Reviewed: 4 November 2026.

## Public sources

- Repository: https://github.com/YogaAgnesh/prism-3d-studio
- Repository revision visible during review: d40005c0f4a814ebef15531b1a4f3a85c26ee291
- Compiled application used for captures: https://yogaagnesh.github.io/prism-3d-studio/docs/
- Product documentation: https://github.com/YogaAgnesh/prism-3d-studio#readme

## Directly observed through the application UI

- Opened the compiled app and loaded its built-in business-pipeline sample: 12 rows, 10 fields.
- Rendered the suggested 3D scatter and the stage/geography column comparison.
- Captured a story scene, entered an illustrative executive takeaway and action, and opened Story presentation.
- Loaded the sensor sample: 8 rows, 4 fields, with a 3D scatter.
- Imported the supplied synthetic pharma demonstration CSV: 36 rows, 7 fields.
- Observed currency and percentage field profiling, a 36-point scatter, chart-title editing and fullscreen chart exploration.

Screenshots are direct browser captures, not generated UI mockups. The portfolio cover composes a genuine chart capture with HTML/CSS typography and framing. UI copy entered for the story was written for the demonstration.

## Screenshot provenance

- `images/prism-workspace.jpg`: deployed app using `docs/prism-pharma-demo.csv`.
- `images/prism-chart.jpg`: fullscreen chart of the same synthetic dataset.
- `images/prism-story.jpg`: Story presentation using the built-in business sample, with a demonstration title, takeaway and action.

The CSV is invented demonstration data. No pharmaceutical company, customer, patient or employee dataset is represented. Figures must not be cited as real business performance.

## Source-backed descriptions, not newly certified results

The public README describes worker-based processing, supported import formats and limits, explainable recommendations, four chart styles, offline standalone HTML/export behavior and configuration files that exclude source rows. It also documents limits on browser verification and performance measurements. This portfolio update did not rerun Prism's complete test suite, perform a security audit, or certify regulated use.

## Product status

The author confirmed there are no real users to cite. Accordingly, the portfolio includes no invented customers, user counts, quotations, testimonials or measured business impact. Pharma commercial leads, sales leaders and executives are potential use cases, not customer references.

## Deployment observation

The shorter root URL initially served the development template and raised `ReferenceError: __PRISM_HOSTED__ is not defined`. The compiled app at `/docs/` worked. The portfolio therefore links to `/docs/`. Publishing the Prism repository from `main` → `/docs` is the appropriate configuration change for the shorter URL; no code change was made to Prism as part of this portfolio update.

Final cover update: the synthetic dataset was switched to Prism's recommended Revenue (USD) grid. The captured surface uses summed revenue by Therapy area and Period. Both categorical axes use encoded spacing; the surface does not imply continuous observations. Workspace and fullscreen screenshots were recaptured from the running app.


## Surface capture correction — 4 November 2026
The previous surface and workspace captures were corrupted and are no longer referenced. `prism-surface-v3.png` is a visually verified viewport capture from the deployed app with `prism-surface-demo.csv`: 1,600 points, numeric binning disabled, surface contours disabled. All values are synthetic. The gallery retains the verified Story Builder capture and the new surface capture.
