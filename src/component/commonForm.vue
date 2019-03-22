<template>
  <el-form
    :model="obj.formParam"
    :rules="obj.formRule"
    ref="commonForm"
    :label-width="obj.labelWidth"
    :inline="obj.inline"
    class="demo-form-inline"
    label-position='left'
  >
    <el-form-item :class="obj.inline?'inline':''" v-for="(item,i) in obj.formPage" :key="i" :label="item.label" :prop="item.prop">
      <el-input v-model="obj.formParam[item.prop]" v-if="item.type==='input'" :disabled="item.disabled"></el-input>
      <el-input v-model="obj.formParam[item.prop]" v-if="item.type==='textarea'" type="textarea" :disabled="item.disabled"></el-input>
      <el-select v-model="obj.formParam[item.prop]" placeholder="请选择" v-if="item.type==='select'">
        <el-option v-for="(it,i) in item.opt" :key="i" :label="it.label" :value="it.value"></el-option>
      </el-select>
      <el-checkbox-group v-model="obj.formParam[item.prop]" v-if="item.type==='checkbox'">
        <el-checkbox v-for="it in item.opt" :key="it.value" :label="it.value"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item v-if="obj.edit" :class="obj.inline?'inline':''">
        <el-button type="primary" v-for="(item,i) in obj.editOpt" :key='i' 
          @click="()=>{$emit(item.fcn)}">{{item.text}}</el-button>
  </el-form-item>
  </el-form>
</template>
<script>
export default {
  created() {},
  props: {
    opt: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    obj() {
      // 将父组件的数据过渡到子组件
      return this.opt;
    }
  }, 
  data() {
    return {
    };
  },
  methods: {
    submit(){
        this.$bus.$emit('submit',this.obj.formParam)
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scope>
.inline{
    margin-top:10px;
}
</style>