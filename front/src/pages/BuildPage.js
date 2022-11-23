// This page is finished by Yuting Shao.
import React, { useState } from "react";
import BasePage from "./BasePage.js";
import "./BuildPage.css";
import Element from "../components/Element";
import MyImage from "../images/me.jpeg";

async function handleBuild(
  N_value,
  O_value,
  Cell_value,
  Dist_value,
  Gravity_value,
  Universe_name,
  Builder_name,
  Nucleus_value,
  mitochondria_value,
  mitosis_value
) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      N: N_value,
      O: O_value,
      cell: Cell_value,
      dist: Dist_value,
      gravity: Gravity_value,
      name: Universe_name,
      builder: Builder_name,
      nucleus: Nucleus_value,
      mitochondria:mitochondria_value,
      mitosis:mitosis_value
    }),
  };
  fetch("/listings/record", requestOptions)
    .then(async (response) => response.json())
    .then((result) => {
      console.log(result);
    });
}

async function handleUpdate(
    N_value,
    O_value,
    Cell_value,
    Dist_value,
    Gravity_value,
    Universe_name,
    Builder_name,
    Nucleus_value,
    mitochondria_value,
    mitosis_value
  ) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        N: N_value,
        O: O_value,
        cell: Cell_value,
        dist: Dist_value,
        gravity: Gravity_value,
        name: Universe_name,
        builder: Builder_name,
        nucleus: Nucleus_value,
        mitochondria:mitochondria_value,
        mitosis: mitosis_value
      }),
    };
    fetch("/listings/update", requestOptions)
      .then(async (response) => response.json())
      .then((result) => {
        console.log(result);
      });
  }

async function handleDelete(
    Universe_name,
    Builder_name
  ) {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: Universe_name,
        builder:Builder_name
      }),
    };
    fetch("/listings/delete", requestOptions)
      .then(async (response) => response.json())
      .then((result) => {
        console.log(result);
      });
  }

function BuildPage() {
  const [N_value, setNValue] = useState(0);
  const [O_value, setOValue] = useState(0);
  const [Cell_value, setCellValue] = useState(0);
  const [Dist_value, setDistValue] = useState(true);
  const [Gravity_value, setGravityValue] = useState(true);
  const [Universe_name, setUniverseName] = useState("");
  const [Builder_name, setBuilderName] = useState("");
  const [Nucleus_value, setNucleusValue] = useState(0);
  const [mitochondria_value, setmitochondriaValue] = useState(0);
  const [mitosis_value, setmitosisValue] = useState(0);
  return (
    <BasePage>
      <div className="BuildPage">
        <h1>Build your universe!</h1>
        <div>
          <p>
            Input the conditions you designed for your universe. Submit it and a
            universe will be created if the conditions are satisfied.
          </p>
        </div>
        <div>
          <img src={MyImage} alt="me"/>
        </div>
        <div className="BuildForm">
          <form>
            <label>
              Enter universe name:
              <input
                type="text"
                value={Universe_name}
                onChange={(e) => setUniverseName(e.target.value)}
              />
            </label>
          </form>
          <Element name="CO2" initialValue={N_value} />
          <button onClick={() => setNValue(N_value + 1)}>Increase CO2</button>
          <button onClick={() => setNValue(N_value - 1)}>Decrease CO2</button>
          <Element name="Amino Acid" initialValue={O_value} />
          <button onClick={() => setOValue(O_value + 1)}>Increase Amino Acid</button>
          <button onClick={() => setOValue(O_value - 1)}>Decrease Amino Acid</button>
          <Element name="Nucleotide" initialValue={Cell_value} />
          <button onClick={() => setCellValue(Cell_value + 1)}>
            Increase Nucleotide
          </button>
          <button onClick={() => setCellValue(Cell_value - 1)}>
            Decrease Nucleotide
          </button>
          <Element name="nucleus" initialValue={Nucleus_value} />
          <button onClick={() => setNucleusValue(Nucleus_value + 1)}>Increase Nucleus</button>
          <button onClick={() => setNucleusValue(Nucleus_value - 1)}>Decrease Nucleus</button>
          <Element name="mitochondria" initialValue={mitochondria_value} />
          <button onClick={() => setmitochondriaValue(mitochondria_value + 1)}>Increase mitochondria</button>
          <button onClick={() => setmitochondriaValue(mitochondria_value - 1)}>Decrease mitochondria</button>
          <Element name="mitosis" initialValue={mitosis_value} />
          <button onClick={() => setmitosisValue(mitosis_value + 1)}>
            Increase mitosis
          </button>
          <button onClick={() => setmitosisValue(mitosis_value - 1)}>
            Decrease mitosis
          </button>
          <Element
            name="Distance To The Sun"
            initialValue={Dist_value ? "Close" : "Far"}
          />
          <button onClick={() => setDistValue(true)}>Close</button>
          <button onClick={() => setDistValue(false)}>Far</button>

          <Element
            name="High Gravity Planet Around"
            initialValue={Gravity_value ? "Yes" : "No"}
          />
          <button onClick={() => setGravityValue(true)}>Yes</button>
          <button onClick={() => setGravityValue(false)}>No</button>
          <form>
            <label>
              Enter builder name:
              <input
                type="text"
                value={Builder_name}
                onChange={(e) => setBuilderName(e.target.value)}
              />
            </label>
          </form>
          <div>
            <button
              onClick={() =>
                handleBuild(
                  N_value,
                  O_value,
                  Cell_value,
                  Dist_value,
                  Gravity_value,
                  Universe_name,
                  Builder_name,
                  Nucleus_value,
                  mitochondria_value,
                  mitosis_value
                )
              }
            >
              Build
            </button>

            <button
              onClick={() =>
                handleUpdate(
                    N_value,
                    O_value,
                    Cell_value,
                    Dist_value,
                    Gravity_value,
                    Universe_name,
                    Builder_name,
                    Nucleus_value,
                    mitochondria_value,
                    mitosis_value
                )
              }
            >
              Update
            </button>

            <button
              onClick={() =>
                handleDelete(
                  Universe_name,
                  Builder_name
                )
              }
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </BasePage>
  );
}

BuildPage.propTypes = {};

export default BuildPage;
