# Zero-Downtime Migration Checklist

1. Always add nullable columns first.
2. Backfill existing rows asynchronously in batches.
3. Add NOT NULL constraints with VALIDATE constraint.
4. Deploy updated application code.
