// import path from "path";
// import { exec } from "child_process";

// // export default ({ env }) => ({

// // });

// export default {
//   myJob: {
//     task: ({ strapi }) => {
//       // const host = env("DATABASE_HOST", "localhost");
//       // const port = env.int("DATABASE_PORT", 3306);
//       // const database = env("DATABASE_NAME", "strapi");
//       // const user = env("DATABASE_USERNAME", "strapi");
//       // const password = env("DATABASE_PASSWORD", "strapi");
//       const date = new Date();
//       const format = "backup";
//       const currentDate = `${date.getFullYear()}-${
//         date.getMonth() + 1
//       }-${date.getDate()}-${date.getHours()}-${date.getMinutes()}`;

//       const backupFilePath = path.join(
//         __dirname,
//         `${database}-${currentDate}.${format}`
//       );

//       exec(
//         `sh ./backup.sh ${password} ${host} ${user} ${port} ${database} ${backupFilePath}`,
//         (error, stdout, stderr) => {
//           if (error) {
//             return console.error(`exec error: ${error}`);
//           }
//           if (stderr) {
//             return console.error(`stderr: ${stderr}`);
//           }

//           console.log(
//             `Created a backup of ${database} at ${date.toLocaleString()} successfully: ${stdout}`
//           );
//         }
//       );
//     },
//     options: {
//       // rule: "0 0 1 * * 1",
//       rule: "* * * * *",
//     },
//   },
// };
