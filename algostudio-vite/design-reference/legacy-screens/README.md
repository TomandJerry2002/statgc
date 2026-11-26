# Legacy screens (design reference only)

The earlier AlgoStudio screens that used to be public at `/legacy`, `/legacy/app`, `/m` and `/brand`,
plus three unrouted screens that import them (`DealsRedesign`, `DealsDesktop`, `HomeV3`).

They are kept here as design reference. Nothing in `src/` imports them, they are outside the
TypeScript `include` and are not part of the build. Their relative imports (`./…`, `@/…`) assume
they live in `src/screens/`, so move a file back there before using it again.
