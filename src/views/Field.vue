<template>
  <div>
    <h2>Операции на поле {{ fieldId }}</h2>
    <nav>
      <router-link :to="{ name: 'field', params: { fieldId, filter: 'planned' } }">
        Запланированные операции
      </router-link>
      <router-link :to="{ name: 'field', params: { fieldId, filter: 'done' } }">
        Выполненные операции
      </router-link>
    </nav>
    <button @click="addOperation">Добавить операцию</button>
    <operations-table
      :type="filter"
      :field-id="fieldId"
      :loading="operationsLoading"
      :error="operationsError"
      :items="sortedOperations"
      :order="order"
      @order="handleOrder"
      @retry="getOperations"
    />
    <router-view
      @close="close"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import OperationsTable from '@/components/Operations/OperationsTable.vue';
import { PLANNED, DONE } from '../services/operations/constants';

export default {
  components: {
    OperationsTable,
  },
  computed: {
    fieldId() {
      return this.$route.params.fieldId;
    },
    filter() {
      return this.$route.params.filter;
    },
    query() {
      return this.$route.query;
    },
    ...mapState(['order']),
    ...mapGetters(['operationsLoading', 'operationsError', 'sortedOperations']),
  },
  watch: {
    $route(to) {
      const { filter } = to.params;

      this.setFilter(filter);
    },
  },
  created() {
    const { filter, fieldId } = this;

    if (![PLANNED, DONE].includes(filter)) {
      this.$router.push({
        name: 'field',
        params: {
          fieldId,
          filter: PLANNED,
        },
      });
    } else {
      this.setFilter(filter);
      this.setOrder({
        orderBy: this.query.orderBy,
        asc: this.query.asc === 'true',
      });
    }

    this.getOperations();
  },
  methods: {
    addOperation() {
      this.$router.push({ name: 'addOperation', query: this.query });
    },
    getOperations() {
      this.$store.dispatch('getOperations');
    },
    close() {
      const { filter, fieldId, query } = this;

      this.$router.push({
        name: 'field',
        params: {
          fieldId,
          filter,
        },
        query,
      });
    },
    handleOrder(payload) {
      this.setOrder(payload);
      this.$router.push({
        query: payload,
      });
    },
    ...mapMutations(['setFilter', 'setOrder']),
  },
};
</script>
