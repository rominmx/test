<template>
  <div>
    <h2>Операции на поле {{ fieldId }}</h2>
    <nav>
      <router-link :to="{ name: 'field', params: { fieldId, operationsType: 'planned' } }">
        Запланированные операции
      </router-link>
      <router-link :to="{ name: 'field', params: { fieldId, operationsType: 'done' } }">
        Выполненные операции
      </router-link>
    </nav>
    <button @click="addOperation">Добавить операцию</button>
    <operations
      :type="operationsType"
      :field-id="fieldId"
    />
    <router-view
      @close="close"
    />
  </div>
</template>

<script>
import Operations from '../components/Operations.vue';

export default {
  components: {
    Operations,
  },
  computed: {
    fieldId() {
      return this.$route.params.fieldId;
    },
    operationsType() {
      return this.$route.params.operationsType;
    },
  },
  created() {
    const { operationsType, fieldId } = this;

    if (!['planned', 'done'].includes(operationsType)) {
      this.$router.push({
        name: 'field',
        params: {
          fieldId,
          operationsType: 'planned',
        },
      });
    }
  },
  methods: {
    addOperation() {
      this.$router.push({ name: 'addOperation' });
    },
    close() {
      const { operationsType, fieldId } = this;

      this.$router.push({
        name: 'field',
        params: {
          fieldId,
          operationsType,
        },
      });
    },
  },
};
</script>
