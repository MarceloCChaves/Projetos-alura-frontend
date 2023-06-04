import { TextField, Button, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";
import http from "../../../http";

const FormularioRestaurante = () => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      http
        .get<IRestaurante>(
          `/restaurantes/${params.id}/`
        )
        .then((res) => setNomeRestaurante(res.data.nome))
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [params]);

  const submeterForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (params.id) {
      http
        .put(`/restaurantes/${params.id}/`, {
          nome: nomeRestaurante,
        })
        .then(() => {
          alert("Restaurante atualizado com sucesso");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      http
        .post("/restaurantes/", {
          nome: nomeRestaurante,
        })
        .then(() => {
          alert("Restaurante cadastrado com sucesso");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Box component="form" onSubmit={submeterForm}>
        <Typography component="h1" variant="h6">
          Formulário de restaurantes
        </Typography>
        <TextField
          value={nomeRestaurante}
          label="Nome do restaurante"
          variant="standard"
          fullWidth
          required
          onChange={(e) => setNomeRestaurante(e.target.value)}
        />
        <Button sx={{ marginTop: 1}} type="submit" variant="outlined" fullWidth>
          {params.id ? "Atualizar" : "Cadastrar"}
        </Button>
      </Box>
    </Box>
  );
};

export default FormularioRestaurante;
