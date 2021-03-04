<template>
  <div v-show="visible" class="root">
    <my-component>
      <div slot="component-heading">
        <go-back @goBack="goBack"/>
      </div>
      <div slot="component-body">
        <div v-if="loading" style="position: absolute; top: 0; left: 0; width: 100%; height: 80vh; display: flex; justify-content: center; align-items: center;">
          <a-spin size="large"/>
        </div>
        <!-- ... -->
        <div>
          <!-- 存储桶名称 -->
          <div>
            <a-divider orientation="left">第一步：存储桶名称</a-divider>
            <div>
              <a-input-search v-model="name"
                              style="width: 300px;"
                              placeholder="请输入存储桶名称"
                              enter-button="新增存储桶"
                              @search="onAddBuckets"/>
            </div>
          </div>
          <!-- 选择存储桶 -->
          <div>
            <a-divider orientation="left">第二步：往存储桶中上传对象</a-divider>
            <div>
              <div>
                <a-button-group>
                  <a-button v-for="(item, index) in bucketList"
                            :key="index"
                            type="primary"
                            :class="{active: bucketName===item.name}"
                            @click="onSelectBucket(item.name)">
                    {{ item.name }}
                  </a-button>
                </a-button-group>
              </div>
            </div>
          </div>
          <!-- 新增图片 -->
          <div>
            <a-divider orientation="left">第三步：新增图片</a-divider>
            <div>
              <a-upload action="#"
                        :auto-upload="false"
                        list-type="picture-card"
                        :file-list="fileList"
                        @change="onUploadChange">
                <div v-if="fileList.length < 8">
                  <a-icon type="plus"/>
                  <div class="ant-upload-text">
                    Upload
                  </div>
                </div>
              </a-upload>
              <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage"/>
              </a-modal>
            </div>
            <div>
              <a-list :data-source="objectList"
                      :loading="loading"
                      item-layout="horizontal">
                <a-list-item slot="renderItem" slot-scope="item">
                  <a slot="actions" @click="onDownloadImage(item)">下载</a>
                  <a slot="actions" @click="onDeleteImage(item)">删除</a>
                  <a-list-item-meta :description="item.name">
                    <a slot="title" href="https://www.antdv.com/">图片</a>
                    <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                  </a-list-item-meta>
                </a-list-item>
              </a-list>
            </div>
          </div>
        </div>
      </div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
import GoBack from '@/components/GoBack'
import * as minio from 'minio'
import Fs from 'browserify-fs'
import FileSaver from '@/lib/FileSaver'
import axios from 'axios'

const CancelToken = axios.CancelToken

let source = CancelToken.source()

export default {
  name: 'Minio',
  components: {
    GoBack,
    MyComponent
  },
  data() {
    return {
      visible: false,
      // ...
      headers: {
        authorization: 'authorization-text'
      },
      previewVisible: false,
      previewImage: '',
      fileList: [
        // {
        //   uid: '-1',
        //   name: 'image.png',
        //   status: 'done',
        //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        // }
      ],
      // ...
      minioClient: null,
      loading: false,
      objectList: [],
      bucketList: [],
      bucketName: '',
      name: '',
      percentage: 0,
      progressDetail: ''
    }
  },
  mounted() {
    // 初始化minio
    this.initMinio()
    // 获取桶
    this.getBucketList()
  },
  methods: {
    // +---------------------------------------------------------------------------------------------
    // | 页面
    // +---------------------------------------------------------------------------------------------
    show() {
      this.visible = true
    },
    goBack() {
      this.visible = false
    },
    // +---------------------------------------------------------------------------------------------
    // | 正文
    // +---------------------------------------------------------------------------------------------
    // +---------------------------------------------------------------------------------------------
    // | 初始化minio
    // +---------------------------------------------------------------------------------------------
    initMinio() {
      this.minioClient = new minio.Client({
        endPoint: '192.168.0.151',
        port: 9000,
        useSSL: false,
        accessKey: 'minioadmin', // Q3AM3UQ867SPQQA43P2F
        secretKey: 'minioadmin' // zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG
      })
    },
    // +---------------------------------------------------------------------------------------------
    // | 【桶】获取列表
    // +---------------------------------------------------------------------------------------------
    getBucketList() {
      this.loading = true
      this.minioClient.listBuckets((err, bucketList) => {
        this.loading = false
        if (err) return console.log(err)
        this.bucketList = bucketList
      })
    },
    // +---------------------------------------------------------------------------------------------
    // | 【桶】新增桶
    // +---------------------------------------------------------------------------------------------
    onAddBuckets() {
      // 1存储桶名称、2存储桶被创建的region(地区)默认是us-east-1(美国东一区)
      this.minioClient.makeBucket(this.name, 'us-east-1', err => {
        if (err) return this.$message.error('新增存储桶错误')
        this.$message.success('新增存储桶错误')
        // 重新获取
        this.getBucketList()
      })
    },
    // +---------------------------------------------------------------------------------------------
    // | 【桶】选择存储桶
    // +---------------------------------------------------------------------------------------------
    onSelectBucket(bucketName) {
      this.bucketName = bucketName
      this.getBucketObject()
    },
    // 获取当前存储桶数据
    getBucketObject() {
      this.loading = true
      this.objectList = []
      // 1：存储桶名称；2：要列出的对象的前缀；3：true - 代表递归查找，false - 代表类似文件夹查找
      const stream = this.minioClient.listObjects(this.bucketName, '', true)
      stream.on('data', obj => {
        this.objectList.push(obj)
        this.loading = false
      })
      // console.log('this.objectList', this.objectList)
      stream.on('error', err => {
        console.log(err)
        this.loading = false
      })
      // var stream = this.minioClient.listObjectsV2('yujian-test','', true) // 使用S3 listing objects V2版本API列出所有对象。
      // stream.on('data', function(obj) { console.log(obj) } )
      // stream.on('error', function(err) { console.log(err) } )
    },
    // +---------------------------------------------------------------------------------------------
    // | 【资源】操作
    // +---------------------------------------------------------------------------------------------
    // 下载
    onDownloadImage(item) {
      const fileName = item.name.split('/')
      this.downloadObjectByUrl(item, fileName)
    },
    // ...
    async downloadObjectByUrl(item) {
      const url = await this.getDownLoadUrl(item)
      console.log('+++++', url)
      window.location = url
      window.URL.revokeObjectURL(url)
    },
    getDownLoadUrl(file) {
      return new Promise((resolve, reject) => {
        this.minioClient.presignedGetObject(this.bucketName, file.name, 24 * 60 * 60, function(err, presignedUrl) {
          if (err) return reject(err)
          resolve(presignedUrl)
        })
      })
    },
    // 删除
    onDeleteImage(item) {
      this.minioClient.removeObject(this.bucketName, item.name, err => {
        if (err) return this.$message.error('删除对象失败')
        this.$message.success('删除对象成功')
        // 重置
        this.getBucketObject()
      })
    },
    // +---------------------------------------------------------------------------------------------
    // | 【资源】上传
    // +---------------------------------------------------------------------------------------------
    // 上传
    async onUploadChange({ file }) {
      console.log('file', file)
      const url = await this.getUploadUrl(file)
      this.uploadFileByUrl(file, url)
    },
    getUploadUrl(file) {
      return new Promise((resolve, reject) => {
        this.minioClient.presignedPutObject(this.bucketName, file.name, 24 * 60 * 60, function(err, presignedUrl) {
          if (err) return reject(err)
          resolve(presignedUrl)
        })
      })
    },
    async uploadFileChange(e) {
      const file = e.target.files[0]
      const url = await this.getUploadUrl(file)
      this.uploadFileByUrl(file, url)
      // this.uploadFileByStream(file)
      // this.uploadFileByString(file)
      // this.uploadFileByFile(file)
    },
    // ...
    uploadFileByUrl(file, url) {
      source = CancelToken.source()
      // let xhr = new XMLHttpRequest()
      axios.put(url, file, {
        onUploadProgress: progressEvent => {
          console.log(progressEvent)
          this.percentage = progressEvent.loaded / progressEvent.total * 100 | 0
          this.progressDetail = `${(progressEvent.loaded / 1024 / 1024).toFixed(2)}/MB(${(progressEvent.loaded / progressEvent.total * 100).toFixed(2)}%)`
        },
        cancelToken: source.token
      }).then((res) => {
        if (res.status !== 200) this.$message.error('上传失败')
        this.$message.success('上传成功')
        // 重置
        this.getBucketObject()
      }).catch(thrown => {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message)
        } else {
          // 处理错误
        }
      })
    },
    // ...
    uploadFileByString(file) {
      const fileReader = new FileReader()
      fileReader.onload = ev => {
        // console.log(ev.target.result, Buffer.from(ev.target.result))
        // 创建一个bufferstream
        // var bufferStream = new stream.PassThrough()
        const fileStream = Fs.createReadStream(Buffer.from(ev.target.result))
        console.log(fileStream)
        // console.log(bufferStream.end(Buffer.from(ev.target.result)))
        // const streams = bufferStream.end(ev.target.result)
        // console.log(streams)
        this.minioClient.putObject(this.bucketName, file.name, fileStream, file.size, function(err, etag) {
          return console.log(err, etag) // err should be null
        })
      }
      fileReader.readAsArrayBuffer(file)
    },
    // ...
    uploadFileByStream() {
      Fs.readFile('/home/hello-world.txt', 'utf-8', (err, data) => {
        console.log(err, data)
        const file = '/home/hello-world.txt'
        var fileStream = Fs.createReadStream('/home/hello-world.txt')
        Fs.stat(file, (err, stats) => {
          console.log(fileStream, stats)
          if (err) return console.log(err)
          this.minioClient.putObject(this.bucketName, 'hello-world.txt', fileStream, stats.size, function(err, etag) {
            return console.log(err, etag) // err should be null
          })
        })
      })
      // Fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function() {
      // })
    },
    // ...
    uploadFileByFile() { // file
      var metaData = {
        'Content-Type': 'application/octet-stream',
        'X-Amz-Meta-Testing': 1234,
        'example': 5678
      }
      this.minioClient.fPutObject(this.bucketName, '40mbfile.png', '/home/hello-world.txt', metaData, function(err, etag) {
        return console.log(err, etag) // err should be null
      })
    },
    downloadObjectByStream(item, fileName) {
      this.minioClient.getObject(this.bucketName, item.name, function(err, dataStream) {
        if (err) return console.log(err)
        const arr = []
        dataStream.on('data', function(chunk) {
          arr.push(chunk)
        })
        dataStream.on('end', function() {
          const blob = new Blob(arr, { type: 'application/octet-stream' })
          FileSaver.saveAs(blob, fileName)
        })
        dataStream.on('error', function(err) {
          console.log(err)
        })
      })
    },
    // 取消上传
    handleCancel() {
      this.$message.error('取消上传')
      this.percentage = 0
      source.cancel('cancel http')
    }
  }
}
</script>

<style lang="less" scoped>
  /* you can make up upload button and sample style by using stylesheets */
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
