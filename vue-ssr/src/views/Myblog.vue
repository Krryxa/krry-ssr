<template>
  <div class="blog-container">
    <ul>
      <li v-for="ele in blogList" :key="ele.id">
        <a :href="domain + ele.id" target="_blank">
          <img :src="domain + ele.image" height="200" />
          <p>{{ ele.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, defineComponent } from '@vue/composition-api'
import { getBlog } from '@/service/api'
export default defineComponent({
  setup(props, ctx) {
    const domain = 'https://ainyi.com/'
    const blogList = ref([])

    const getBlogData = async () => {
      const { result } = await getBlog({
        pageNo: 3,
        pageSize: 16
      })
      blogList.value = result.data
    }
    getBlogData()

    return { blogList, domain }
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
