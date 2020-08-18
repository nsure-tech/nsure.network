<template>
    <div class="dialog">
        <el-dialog
            center
            top="0"
            custom-class="custom-dialog"
            destroy-on-close
            :show-close="false"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :visible.sync="dialogVisible"
            :width="width">
            <slot name="body"></slot>
            <span slot="footer" class="dialog-footer">
                <slot name="footer"></slot>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: {
        width: {
            type: String,
            default: '400px'
        }
    },
    computed: {
        ...mapState(['dialogVisible'])
    }
}
</script>

<style lang="less">
.el-dialog {
    border-radius: 10px;
    margin-top: 0;
    top: 45%;
    transform: translateY(-50%);
}
.dialog-footer {
    .button {
        width: 108px;
    }
}
.el-dialog__header {
    padding: 0;
}
</style>
