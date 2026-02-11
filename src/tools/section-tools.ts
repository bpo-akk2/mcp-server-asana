import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const addTaskToSectionTool: Tool = {
  name: "asana_add_task_to_section",
  description: "Add a task to a specific section. This can be used to move a task between sections within a project.",
  inputSchema: {
    type: "object",
    properties: {
      section_id: { type: "string", description: "The section GID to add the task to" },
      task_id: { type: "string", description: "The task GID to add to this section" },
      insert_before: { type: "string", description: "Optional: A task GID to insert this task before" },
      insert_after: { type: "string", description: "Optional: A task GID to insert this task after" },
    },
    required: ["section_id", "task_id"]
  }
};
