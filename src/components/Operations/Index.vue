<template>
  <div :class="[$style.container, { [$style.hasMessage]: !success }]">
    <div
      v-if="loading"
      :class="$style.message"
    >
      Загрузка операций...
    </div>
    <div
      v-if="error"
      :class="$style.message"
    >
      Ошибка загрузки данных
      <button @click="retry">Попробовать заново</button>
    </div>
    <div
      v-if="zeroElements"
      :class="$style.message"
    >
      Для поля нет доступных операций
    </div>
    <table
      v-if="success"
      :class="$style.table"
    >
      <thead>
      <tr>
        <table-control
          :is-active="order.orderBy === 'date'"
          :desc="order.desc"
          type="date"
          @order="handleOrder"
        >
          Дата
        </table-control>
        <table-control
          :is-active="order.orderBy === 'type'"
          :desc="order.desc"
          type="type"
          @order="handleOrder"
        >
          Операция
        </table-control>
        <table-control
          :is-active="order.orderBy === 'culture'"
          :desc="order.desc"
          type="culture"
          @order="handleOrder"
        >
          Культура
        </table-control>
        <table-control
          :is-active="order.orderBy === 'assessment'"
          :desc="order.desc"
          type="assessment"
          @order="handleOrder"
        >
          Качество
        </table-control>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item.id">
        <td :class="$style.date">{{ item.date | filterDate }}</td>
        <td :class="$style.type">{{ item.type.title }}</td>
        <td :class="$style.culture">
          <culture
            :title="item.culture.title"
            :value="item.culture.value"
          />
        </td>
        <td :class="$style.assessment">
          <assessment
            :title="item.assessment.title"
            :value="item.assessment.value"
          />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MONTHS } from '@/utls/date';
import TableControl from './TableControl.vue';
import Assessment from './Assessment.vue';
import Culture from './Culture.vue';

export default {
  filters: {
    filterDate({ year, month, day }) {
      const currentMonth = MONTHS[month].slice(0, 3);

      return `${day} ${currentMonth} ${year}`;
    },
  },
  components: {
    Assessment,
    Culture,
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

<style module>
.container {
  flex-grow: 1;
  display: flex;
}

.hasMessage {
  align-items: center;
  justify-content: center;
}

.message {
  font-size: 13px;
}

.table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

.table td {
  padding: 16px 12px;
}

.table tr {
  border-bottom: 1px solid #edeeee;
}

.date {
  width: 75px;
  font-size: 11px;
  text-transform: uppercase;
}

.type {
  font-size: 13px;
  font-weight: 500;
}

.culture {
  width: 190px;
}

.assessment {
  width: 155px;
}
</style>
