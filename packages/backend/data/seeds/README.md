# Using the Task Seed Data

This directory contains a seed data file named `tasks_seed.jsonl`. You can use this file to import tasks into your database using the `bun convex` command.

## Importing Data

To import the data, run the following command:

```bash
bun convex import --table tasks ./data/seeds/tasks_seed.jsonl --append
```

### Important Notes
- **Schema and Table Name**: Ensure that the schema and the table name match when importing.
- **Append Flag**: Use the `--append` flag if the table is already created and you want to add more data to it.
- **Other Flags**: There are other flags available for different import options. Refer to the `bun convex` documentation for more details.