<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="(column, i) in columns"
          :key="i"
        >
          {{ column }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="order in orders"
        :key="String(order)"
      >
        <td
          v-for="(column, i) in columns"
          :key="i"
        >
          <div v-if="!column">
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-outline-secondary invoice-btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              @click="setProviderInfo(order[i])"
            >
              Dados do cedente
            </button>
          </div>
          <span v-else>
            {{ order[i] }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- Modal -->
  <div
    id="staticBackdrop"
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3
            id="staticBackdropLabel"
            class="modal-title my-3 text-muted ps-3"
          >
            Provider Info
          </h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div
          v-if="providerInfo"
          class="modal-body"
        >
          <ProviderInfo :provider="providerInfo" />
        </div>
        <div class="modal-footer text-center bg-light">
          <SocialMedia />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ProviderProps } from "../types/ProviderProps";
import ProviderInfo from './ProviderInfo.vue';
import SocialMedia from './SocialMedia.vue';

defineProps({
  columns: {
    type: Array<string | null>,
    required: true
  },
  orders: {
    type: Array<[string | ProviderProps]>,
    default: [],
    required: true
  },
});

const providerInfo = ref();

function setProviderInfo(info: string | ProviderProps) {
  providerInfo.value = info;
}
</script>
