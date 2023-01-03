<template>
  <section>
    <div class="col-lg-8 w-100">
      <div class="card mb-4 border-0">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">
                Nome:
              </p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">
                {{ company.name }}
              </p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">
                Nome comercial:
              </p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">
                {{ company.tradingName }}
              </p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">
                Criada em:
              </p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">
                {{ company.createdAt }}
              </p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">
                Cnpj:
              </p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">
                {{ company.cnpj }}
              </p>
            </div>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
import { ProviderProps } from "../types/ProviderProps";

const props = defineProps({
  provider: {
    type: Object as PropType<ProviderProps>,
    required: true
  },
});

function formatCnpj(cnpj: string) {
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
}

const company = computed({
  get() {
    return {
      name: props.provider.name,
      tradingName: props.provider.tradingName,
      createdAt: new Date(props.provider.createdAt).toLocaleDateString(),
      cnpj: formatCnpj(props.provider.cnpj.cnpj),
    };
  },
  set(): void {
    return;
  }
});
</script>
