<template>
  <div>
    <div>{{ type }} операции для поля: {{ fieldId }}</div>
    <div v-if="loading">Загрузка операций...</div>
    <div v-if="error">
      Ошибка загрузки данных
      <button @click="retry">Попробовать заново</button>
    </div>
    <div v-if="zeroElements">Для поля нет доступных операций</div>
    <table v-if="success">
      <thead>
      <tr>
        <table-control
          :is-active="order.orderBy === 'date'"
          :asc="order.asc"
          type="date"
          @order="handleOrder"
        >
          Дата
        </table-control>
        <table-control
          :is-active="order.orderBy === 'type'"
          :asc="order.asc"
          type="type"
          @order="handleOrder"
        >
          Операция
        </table-control>
        <table-control
          :is-active="order.orderBy === 'culture'"
          :asc="order.asc"
          type="culture"
          @order="handleOrder"
        >
          Культура
        </table-control>
        <table-control
          :is-active="order.orderBy === 'assessment'"
          :asc="order.asc"
          type="assessment"
          @order="handleOrder"
        >
          Качество
        </table-control>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.date | filterDate }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.culture }}</td>
        <td>{{ item.assessment }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MONTHS } from '@/utls/date';
import TableControl from './TableControl.vue';

export default {
  filters: {
    filterDate({ year, month, day }) {
      const currentMonth = MONTHS[month].slice(0, 3);

      return `${day} ${currentMonth} ${year}`;
    },
  },
  components: {
    TableControl,
  },
  props: {
    fieldId: {
      type: [Number, String],
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: true,
    },
    order: {
      type: Object,
      required: true,
    },
  },
  computed: {
    zeroElements() {
      return !this.loading && !this.error && !this.items.length;
    },
    success() {
      return !this.loading && this.items.length;
    },
  },
  methods: {
    handleOrder(params) {
      this.$emit('order', params);
    },
    retry() {
      this.$emit('retry');
    },
  },
};
</script>
