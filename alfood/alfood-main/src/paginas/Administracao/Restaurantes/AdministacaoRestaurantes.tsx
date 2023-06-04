import { useEffect, useState } from "react";
import IRestaurante from "../../../interfaces/IRestaurante";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import http from "../../../http";

const AdministracaoRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

  useEffect(() => {
    http
      .get("/restaurantes/")
      .then((res) => {
        setRestaurantes(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const excluirRestaurante = (restauranteExcluido: IRestaurante) => {
    http
      .delete(
        `/restaurantes/${restauranteExcluido.id}/`
      )
      .then(() => {
        const listaRestaurante = restaurantes.filter(
          (restaurante) => restaurante.id !== restauranteExcluido.id
        );
        setRestaurantes([...listaRestaurante]);
        alert("Restaurante Deletado com sucesso");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantes.map((restaurante) => {
            return (
              <TableRow key={restaurante.id}>
                <TableCell>{restaurante.nome}</TableCell>
                <TableCell>
                  <Link to={`${restaurante.id}`}>Editar</Link>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => excluirRestaurante(restaurante)}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdministracaoRestaurantes;
