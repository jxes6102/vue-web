<template lang='pug'>
div(class="w-full h-[100vh] flex flex-wrap items-center justify-center")
  div.drop-zone(
    class="w-full md:w-[600px] h-[200px] md:h-[400px] flex flex-col items-center justify-center cursor-pointer border-dashed border-[#009578] border-4 rounded-2xl bg-[#e0ffb5]"
  )
    span.drop-zone__prompt Drop file here or click to upload
    input.drop-zone__input(type='file' name='myFile')
  div(
    class="w-full md:w-[80%] h-auto px-1"
  )
    el-table(
      v-if="tableData.length"
      :data='tableData' :height='isMobile ? 300 : 500' style='width: 100%'
    )
      el-table-column(prop='date' label='Date' width='180')
      el-table-column(prop='name' label='Name' width='180')
      el-table-column(prop='address' label='Address')
</template>
<script>
  // @ is an alias to /src
  import { ref,computed,onMounted } from 'vue'
  import store from '@/store'
  export default {
    name: 'formView',
    components: {
    },
    setup() {
      const isMobile = computed(() => store.state.isMobile)
      const tableData = ref([])
      const init = () => {
        tableData.value = [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]

      }

      const loadFile = () => {
        document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
        const dropZoneElement = inputElement.closest(".drop-zone");

        dropZoneElement.addEventListener("click", (e) => {
          inputElement.click();
        });

        inputElement.addEventListener("change", (e) => {
          if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
          }
        });

        dropZoneElement.addEventListener("dragover", (e) => {
          e.preventDefault();
          dropZoneElement.classList.add("drop-zone--over");
        });

        ["dragleave", "dragend"].forEach((type) => {
          dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone--over");
          });
        });

        dropZoneElement.addEventListener("drop", (e) => {
          e.preventDefault();

          if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
          }

          dropZoneElement.classList.remove("drop-zone--over");
        });
      });
    }
    /**
     * Updates the thumbnail on a drop zone element.
     *
     * @param {HTMLElement} dropZoneElement
     * @param {File} file
     */
      const updateThumbnail = (dropZoneElement, file) => {
      let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

      // First time - remove the prompt
      if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
      }

      // First time - there is no thumbnail element, so lets create it
      if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
      }

      thumbnailElement.dataset.label = file.name;

      // Show thumbnail for image files
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
          thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
      } else {
        thumbnailElement.style.backgroundImage = null;
      }
    }
    // init()

    onMounted(() => {
      loadFile()
    })


      return {
        isMobile,
        tableData,
      }
    }
  }
</script>
<style scoped>
.drop-zone--over {
  border-style: solid;
}

.drop-zone__input {
  display: none;
}

.drop-zone__thumb {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #cccccc;
  background-size: cover;
  position: relative;
}

.drop-zone__thumb::after {
  content: attr(data-label);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5px 0;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.75);
  font-size: 14px;
  text-align: center;
}
</style>
