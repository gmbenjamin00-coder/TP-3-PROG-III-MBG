const { useState } = React;

function App() {
  const [maxId, setMaxId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const imc = (peso / (altura / 100) ** 2).toFixed(2);
  const [listadoPersonas, setListadoPersonas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      apellido.trim() === "" ||
      nombre.trim() === "" ||
      edad <= 0 ||
      altura <= 0 ||
      peso <= 0
    ) {
      return;
    }

    const newMaxId = maxId + 1;
    setListadoPersonas([
      ...listadoPersonas,
      {
        id: newMaxId,
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        edad,
        altura,
        peso,
        imc,
      },
    ]);
    setMaxId(newMaxId);
    setNombre("");
    setApellido("");
    setEdad("");
    setAltura("");
    setPeso("");
  };

  return (
    <main>
      <h1>Tabla de personas(React)</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFol="nombre">Nombre:</label>
        <input
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFol="apellido">Apellido:</label>
        <input
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label htmlFol="edad">Edad:</label>
        <input
          id="edad"
          type="number"
          min={0}
          max={100}
          value={edad}
          onChange={(e) => setEdad(Number(e.target.value))}
        />
        <label htmlFol="altura">Altura:</label>
        <input
          id="altura"
          type="number"
          min={0}
          max={200}
          value={altura}
          onChange={(e) => setAltura(Number(e.target.value))}
        />
        <label htmlFol="peso">Peso:</label>
        <input
          id="peso"
          type="number"
          min={0}
          max={200}
          value={peso}
          onChange={(e) => setPeso(Number(e.target.value))}
        />

        <div>
          <button id="btn" type="submit">
            Cargar
          </button>
        </div>
      </form>

      <h3>Tabla</h3>
      {listadoPersonas.length === 0 ? (
        <p>Sin personas cargadas</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Altura(cm)</th>
              <th>Peso(kg)</th>
              <th>IMC</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {listadoPersonas.map((persona) => (
              <tr key={persona.id}>
                <td>{persona.nombre}</td>
                <td>{persona.apellido}</td>
                <td>{persona.edad}</td>
                <td>{persona.altura}</td>
                <td>{persona.peso}</td>
                <td>{persona.imc}</td>

                <td>
                  <button
                    id="btn2"
                    onClick={() => {
                      const filtrado = listadoPersonas.filter(
                        (p) => p.id !== persona.id,
                      );
                      setListadoPersonas(filtrado);
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
