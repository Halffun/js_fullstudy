<template>
  <div id="compress">
    <el-upload
      class="upload-demo"
      drag
      action=""
      multiple
      accept="image/*"
      on-change="fileUpload"
      show-file-list="false"
      auto-upload="false"
      list-type="picture-card"
    >
      <el-button size="small" type="primary">点击或拖拽上传</el-button>
    </el-upload>

    <div class="demo-image">
      <div class="block" v-for="(img, index) in list" :key="index">
        <span class="demonstration">{{ img.name }}</span>
        <el-image
          style="width: 100px; height: 100px; border: 1px solid #e9e9e9"
          :src="img.url"
          alt="非图片资源"
          fit="cover"
        >
          <div slot="error" class="image-slot"><span>非图片资源</span></div>
        </el-image>
        <div class="operation">
          <el-tooltip
            class="item"
            effect="dark"
            content="下载图片"
            placement="top"
          >
            <i class="el-icon-upload2" @click="download(img.name, img.url)">
              <a :href="img.file" :download="img.name">下载</a>
            </i>
          </el-tooltip>
          <el-badge :value="img.proportion" class="badge"></el-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      list: [],
      visible: false
    }
  },
  methods: {
    fileUpload: function (file, fileList) {
      const self = this;
      console.log("file", file);
      lrz(file.raw).then((rst) => {
        // 处理成功会执行
        console.log("rst", rst);
        const { origin, fileLen, base64, file } = rst;
        const proportion = `${((fileLen / origin.size) * 100).toFixed(0)}%`; // 压缩比例
        self.list.push({
          proportion: proportion,
          name: origin.name,
          url: base64,
          file: URL.createObjectURL(file),
        });
      });
    },
  },
};
</script>

<style lang="less">
#compress {
  header h1 {
    text-align: center;
    margin: 10px 0;
  }
  .filter {
    padding: 10px 10px;
  }
  .el-upload {
    display: block;
    margin: 0 auto;
    .el-upload-dragger {
      width: 100%;
      margin: 0 auto;
      background: transparent;
      border: none;
    }
  }
  .el-upload--picture-card {
    margin-top: 10px;
    width: 98%;
    height: 170px !important;
  }
  .demo-image {
    display: flex;
    flex-wrap: wrap;
    .block {
      width: 100px;
      display: flex;
      flex-direction: column;
      margin: 10px 10px;
      .el-image {
        margin: 10px 0;
      }
      .demonstration {
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  .operation {
    display: flex;
    justify-content: space-around;
    i {
      cursor: pointer;
    }
  }
}
</style>