import express from "express";
import { readFile, writeFile } from "fs/promises";
import exphbs from "express-handlebars";

const PORT = 3000;
const WEB_DIR = "web";
const DATA_FILE = "zmones.json";

const app = express();
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static(WEB_DIR, {
  index: false,
}));
app.use(express.urlencoded({
  extended: true,
}));

app.get("/", async (req, res) => {
  try {
    let zmones = await readFile(DATA_FILE, {
      encoding: "utf-8",
    });
    zmones = JSON.parse(zmones);

    res.render("zmones", {
      zmones,
      title: "Pilnas zmoniu sarasas",
    });
  } catch (err) {
    res.status(500).end(
      `<html><body>Ivyko klaida: ${err.message}</body></html>`,
    );
  }
});

app.get("/zmogus/:id", async (req, res) => {
  try {
    let zmones = await readFile(DATA_FILE, {
      encoding: "utf-8",
    });
    zmones = JSON.parse(zmones);

    const id = parseInt(req.params.id);

    const zmogus = zmones.find((z) => z.id === id);

    res.render("zmogus", {
      zmogus,
      title: "Vienas zmogus",
    });
  } catch (err) {
    res.status(500).end(
      `<html><body>Ivyko klaida: ${err.message}</body></html>`,
    );
  }
});

app.post("/zmogus", async (req, res) => {
  try {
    let zmones = await readFile(DATA_FILE, {
      encoding: "utf-8",
    });
    zmones = JSON.parse(zmones);

    let nextId = 0;
    for (const zmogus of zmones) {
        if (zmogus.id > nextId) {
            nextId = zmogus.id;
        }
    }
    nextId++;

    const id = parseInt(req.params.id);
    const zmogus = {
        id: nextId,
        vardas: req.body.vardas,
        pavarde: req.body.pavarde,
        alga: parseFloat(req.body.alga),
    };
    zmones.push(zmogus);

    await writeFile(DATA_FILE, JSON.stringify(zmones, null, 2), {
        encoding: "utf-8"
    });

    res.redirect("/");
    
  } catch (err) {
    res.status(500).end(
      `<html><body>Ivyko klaida: ${err.message}</body></html>`,
    );
  }
});

app.delete("/zmones/:id", async (req, res) => {
  const id = parseInt(req.params.JSON)
});

// app.get("/", async (req, res) => {
//   try {
//     let template = await readFile("views/zmones.handlebars", {
//       encoding: "utf-8",
//     });
//     template = Handlebars.compile(template);

//     let zmones = await readFile(DATA_FILE, {
//       encoding: "utf-8",
//     });
//     zmones = JSON.parse(zmones);

//     res.send(template({ zmones }));
//   } catch (err) {
//     res.status(500).end(
//       `<html><body>Ivyko klaida: ${err.message}</body></html>`,
//     );
//   }
// });
// app.get("/", async (req, res) => {
//     try {
//         let zmones = await readFile(DATA_FILE, {
//             encoding: "utf-8"
//         });
//         zmones = JSON.parse(zmones);
//         let html = "<html><body>";
//         html += "<table>";
//         for (const zmogus of zmones) {
//             html += "<tr>";
//             html += "<td>";
//             html += zmogus.vardas;
//             html += "</td>";
//             html += "<td>";
//             html += zmogus.pavarde;
//             html += "</td>";
//             html += "<td>";
//             html += zmogus.alga;
//             html += "</td>";
//             html += "</tr>";
//         }
//         html += "</table>";
//         html += "</body></html>";
//         res.send(html);
//     }
//     catch (err) {
//         res.status(500).end(`<html><body>Ivyko klaida: ${err.message}</body></html>`);
//     }
// });

app.listen(PORT);
console.log(`Server started on port ${PORT}`);
