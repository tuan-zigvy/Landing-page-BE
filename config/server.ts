// import cronTasks from "./cron-tasks";
import path from "path";
import { exec } from "child_process";
export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  cron: {
    enabled: true,
    // tasks: cronTasks,
    tasks: {
      "30 10 * * 1": async ({ strapi }) => {
        const host = env("DATABASE_HOST", "localhost");
        const port = env.int("DATABASE_PORT", 3306);
        const database = env("DATABASE_NAME", "strapi");
        const user = env("DATABASE_USERNAME", "strapi");
        const password = env("DATABASE_PASSWORD", "strapi");
        const date = new Date();
        const format = "backup";
        const currentDate = `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}-${date.getHours()}-${date.getMinutes()}`;

        const backupFilePath = path.join(
          __dirname,
          `${database}-${currentDate}.${format}`
        );
        exec(
          `sh ./backup.sh ${password} ${host} ${user} ${port} ${database} ${backupFilePath}`,
          (error, stdout, stderr) => {
            if (error) {
              return console.error(`exec error: ${error}`);
            }
            if (stderr) {
              return console.error(`stderr: ${stderr}`);
            }

            console.log(
              `Created a backup of ${database} at ${date.toLocaleString()} successfully: ${stdout}`
            );
          }
        );
      },
    },
  },
});
