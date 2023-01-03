<template>
  <div class="orders">
    <h2><i class="fa-regular fa-handshake" />Notas Fiscais</h2>
    <p>Visualize as notas fiscais que você tem.</p>
    <Invoices
      :columns="columns"
      :orders="orders"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Invoices from "../components/Invoices.vue";
import api from "../services/api";
import { OrderType } from "../types/OrderType";

const orders = ref();
const columns = [
  "NOTA FISCAL",
  "SACADO",
  "CEDENTE",
  "EMISSAO",
  "VALOR",
  "STATUS",
  null,
];
const orderStatus = [
  'Pendente de confirmação',
  'Pedido confirmado',
  'Não reconhece o pedido',
  'Mercadoria não recebida',
  'Recebida com avaria',
  'Devolvida',
  'Recebida com devolução parcial',
  'Recebida e confirmada',
  'Pagamento Autorizado',
];

function convertNumberToBrl(number: number) {
  return number.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}

function convertDateFormat(date: Date) {
  return date.toLocaleDateString();
}

async function getOrders() {
  const ordersFullInfo: OrderType[] = await api.getOrders({ userId: 1 });
  orders.value = ordersFullInfo.map((order) => {
    return [
      order.orderNumber,
      order.buyer.name,
      order.provider.name,
      convertDateFormat(new Date(order.createdAt)),
      convertNumberToBrl(+order.value),
      orderStatus[+order.orderStatusBuyer],
      order.provider,
    ];
  });
}
onMounted(getOrders);
</script>
