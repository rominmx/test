<template>
  <div :class="$style.container">
    <h2 :class="$style.title">Операции на поле {{ fieldId }}</h2>
    <nav :class="$nav.linksContainer">
      <div :class="$nav.links">
        <router-link
          :to="{ name: 'field', params: { fieldId, filter: 'planned' } }"
          :class="[$nav.link, 'link']"
        >
          Запланированные операции
        </router-link>
        <router-link
          :to="{ name: 'field', params: { fieldId, filter: 'done' } }"
          :class="[$nav.link, 'link']"
        >
          Выполненные операции
        </router-link>
      </div>
      <button
        :class="$nav.button"
        title="Добавить операцию"
        @click="addOperation"
      >
        Добавить операцию
      </button>
    </nav>
    <operations
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
import Operations from '@/components/Operations/Index.vue';
import { PLANNED, DONE } from '../services/operations/constants';

export default {
  components: {
    Operations,
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

<style module="$style">
.title {
  font-size: 25px;
  font-weight: 500;
}
.container {
  width: var(--container-width);
  padding-left: var(--padding);
  padding-right: var(--padding);
  background-color: #fff;
  box-shadow: 10px 0 30px rgba(0,0,0,.1);
  display: flex;
  flex-direction: column;
}
</style>

<style module="$nav">
.linksContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.links {
  flex-grow: 1;
  margin-left: -8px;
}

.link {
  text-transform: uppercase;
  font-weight: 500;
  text-decoration: none;
  font-size: 11px;
  margin-right: 1em;
  display: inline-block;
  padding: 4px 8px;
}

.link:active {
  outline: 2px dotted var(--link-color);
}

.button {
  font-size: 13px;
  font-weight: 500;
  line-height: 40px;
  font-family: var(--font-family);
  color: var(--color);
  background-color: transparent;
  box-shadow: 0 0 8px #aaa;
  border: none;
  padding: 0 24px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
}

.button:focus {
  outline: 2px dotted var(--link-color);
}
</style>

<style scoped>
.link.router-link-active {
  color: var(--color);
}
</style>
