<template>
  <div class="blog-container">
    <ul>
      <li v-for="ele in blogListFromVuex" :key="ele.id">
        <a :href="domain + ele.id" target="_blank">
          <img :src="domain + ele.image" height="200" />
          <p>{{ ele.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, defineComponent, computed } from '@vue/composition-api'
import { getBlog } from '@/service/api'

export default defineComponent({
  asyncData({ store, route }) {
    // 自定义静态方法 asyncData
    console.log('执行了吗')
    return store.dispatch('getBlogList')
  },

  setup(props, ctx) {
    const $store = ctx.root.$store // @vue/composition-api 使用 vuex（vue2 环境）
    const domain = 'https://ainyi.com/'
    const blogList = ref([])

    const getBlogData = async () => {
      const { result } = await getBlog({
        pageNo: 3,
        pageSize: 16
      })
      blogList.value = result.data
    }
    // 掉接口获取数据
    // getBlogData()

    // 使用 vuex 获取接口数据
    if (!$store.state.blogListFromVuex.length) {
      $store.dispatch('getBlogList')
    }
    const blogListFromVuex = computed(() => $store.state.blogListFromVuex)

    return { blogList, domain, blogListFromVuex }
  }
})
</script>

<style lang="scss" scoped>
.blog-container {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      list-style: none;
      text-align: left;
      width: 243px;
      margin: 20px;

      a {
        text-decoration: none;
        color: #333;
        &:hover {
          color: #ff5252;
        }

        img {
          border-radius: 6px;
        }
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
