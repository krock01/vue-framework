<template>
  <k-header class="l-header">
    <k-row>
        <k-col :span="16">
          <div class="lheader-left" >
            <k-breadcrumb separator="/">
              <k-breadcrumb-item :to="{path:'/'}"> 首页 </k-breadcrumb-item>
              <k-breadcrumb-item><a href="/">活动管理</a></k-breadcrumb-item>
              <k-breadcrumb-item>活动列表</k-breadcrumb-item>
            </k-breadcrumb>
          </div>
        </k-col>
        <k-col :span="8">
          <div class="lheader-right">
            <k-dropdown>
              <span class="el-dropdown-link">
                admin<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <template slot="dropdown-item">
                <k-dropdown-item>个人信息</k-dropdown-item>
                <k-dropdown-item>修改密码</k-dropdown-item>
                <k-dropdown-item>注销</k-dropdown-item>
              </template>
            </k-dropdown>
          </div>
          </k-col>
      </k-row>
  </k-header>
</template>
<script>
import KHeader from '@/components/k-header';
import KRow from '@/components/k-row';
import KDropdown from '@/components/dropdown/k-dropdown';
import KDropdownItem from '@/components/dropdown/k-dropdown-item';
import KCol from '@/components/k-col';

import KBreadcrumb from '@/components/breadcrumb/k-breadcrumb';
import KBreadcrumbItem from '@/components/breadcrumb/k-breadcrumb-item';
export default {
  name: 'LHeader',
  components: {
    KHeader,
    KDropdown,
    KDropdownItem,
    KRow,
    KCol,
    KBreadcrumb,
    KBreadcrumbItem
  }
};
</script>
<style lang="scss" scoped>
.l-header{
  height: 84px;
  width: 100%;
  border-bottom: 1px solid #d2d2d2;
  .lheader-left{
    padding: 20px 0;
    .el-breadcrumb{
      height: 22px;
      line-height: 22px;
    }
  }
  .lheader-right{
    width:100%;
    padding:20px 0;
    text-align:right;
  }
}
</style>
