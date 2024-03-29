import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {student} from "@/types/student";
import type {teacher} from "@/types/teacher";

export const useMessageStore = defineStore('Message', () => {

    const message = ref<student | null>()

    const setMessage = (data: student ) => {
        message.value = JSON.parse(JSON.stringify(data))
    }
    const clear = () => {
        message.value = null
    }
    const addr = computed(() => {
        if (message.value) {
            if (message.value.Ip.country == '中国') {
                if (message.value.Ip.city) {
                    return message.value.Ip.prov + '省' + message.value.Ip.city + '市'
                } else {
                    return message.value.Ip.prov + '市'
                }
            } else {
                return message.value.Ip.country
            }

        }
        return ''
    })
    const createtime = computed(() => {
        return message.value?.createtime.substring(0, 10)
    })
    const updatatime = computed(() => {
        return message.value?.updatatime.substring(0, 19).replace('T', ' ')
    })


    return {message, setMessage, clear, addr, createtime, updatatime}
})
