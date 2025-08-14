/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import axios from "axios";
import type Produto from "../models/Produto";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Cadastrar usuário
export const cadastrarUsuario = async (
  url: string,
  dados: object,
  setDados: Function
): Promise<any> => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
  return resposta.data;
};

// Login
export const login = async (
  url: string,
  dados: object,
  setDados: Function
): Promise<any> => {
  const resposta = await api.post(url, dados);

  // Salva o token no localStorage
  localStorage.setItem("token", resposta.data.token);

  setDados(resposta.data);
  return resposta.data;
};

// Buscar dados (GET)
export const buscar = async (
  url: string,
  setDados: Function,
  header?: object
): Promise<any> => {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
  return resposta.data;
};

// Cadastrar com header (POST)
export const cadastrar = async (
  url: string,
  dados: object,
  setDados: Function,
  header: object
): Promise<any> => {
  const resposta = await api.post(url, dados, header);
  setDados(resposta.data);
  return resposta.data;
};

// Atualizar com header (PUT)
export const atualizar = async (
  url: string,
  dados: object,
  setDados: Function,
  header: object
): Promise<any> => {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data);
  return resposta.data;
};

// Deletar
export const deletar = async (url: string, header: object): Promise<void> => {
  await api.delete(url, header);
};

// Aplicar desconto (PUT com body vazio + header + retorno Produto)
export const aplicarDesconto = async (
  url: string,
  setDados: Function,
  header: object
): Promise<Produto> => {
  const resposta = await api.put(url, {}, header); // PUT precisa de body, mesmo vazio
  setDados(resposta.data);
  return resposta.data;
};