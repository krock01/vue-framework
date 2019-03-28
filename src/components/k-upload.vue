<template>

  <el-upload
  ref="upload"
  :action="action"
  :headers="headers"
  :data="data"
  :multiple="multiple"
  :name="name"
  :with-credentials="withCredentials"
  :show-file-list="showFileList"
  :drag="drag"
  :accept="accept"
  :on-preview="onPreview"
  :on-remove="onRemove"
  :on-success="onSuccess"
  :on-error="onError"
  :on-progress="onProgress"
  :on-change="onChange"
  :before-upload="beforeUpload"
  :before-remove="beforeRemove"
  :list-type="listType"
  :auto-upload="autoUpload"
  :file-list="fileList"
  :http-request="httpRequest"
  :disabled="disabled"
  :limit="limit"
  :on-exceed="onExceed"
  >
  <slot name="trigger" slot="trigger"></slot>
  <slot name="tip" slot="tip"></slot>
  </el-upload>
</template>

<script>
import { Upload } from 'element-ui';
export default {
  name: 'KUpload',
  components: {
    'el-upload': Upload
  },
  props: {
    action: {
      type: String,
      required: true
    },
    headers: {
      type: Object,
      default () {
        return {};
      }
    },
    data: Object,
    multiple: Boolean,
    name: {
      type: String,
      default: 'file'
    },
    drag: Boolean,
    dragger: Boolean,
    withCredentials: Boolean,
    showFileList: {
      type: Boolean,
      default: true
    },
    accept: String,
    type: {
      type: String,
      default: 'select'
    },
    beforeUpload: Function,
    beforeRemove: Function,
    onRemove: {
      type: Function

    },
    onChange: {
      type: Function

    },
    onPreview: {
      type: Function
    },
    onSuccess: {
      type: Function

    },
    onProgress: {
      type: Function

    },
    onError: {
      type: Function

    },
    fileList: {
      type: Array,
      default () {
        return [];
      }
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    listType: {
      type: String,
      default: 'text' // text,picture,picture-card
    },
    httpRequest: Function,
    disabled: Boolean,
    limit: Number,
    onExceed: {
      type: Function

    }
  },
  methods: {
    clearFiles () {
      this.$refs.upload.clearFiles();
    },
    abort (file) {
      this.$refs.upload.abort(file);
    },
    submit () {
      this.$refs.upload.submit();
    }
  }
};
</script>
