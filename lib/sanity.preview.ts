"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error(`Não foi possível carregar a visualização porque você não está logado`);
}

  if(!projectId || !dataset) {
    throw new Error(
      `Não foi encontrado projectId ou dataset. Verifique as configurações da api`
    )
  }

  export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
  })
