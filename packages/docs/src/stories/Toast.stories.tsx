import { Toast, ToastProps } from '@class-ignite-ui/react'
import { Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Data Display/Toast',
    component: Toast,
} as Meta<ToastProps>

export const Primary : StoryObj<ToastProps> = {
    args: {
        open: true,
        title: 'Agendamento realizado',
        description: 'Quarta-feira, 23 de Outubro às 16h'
    }
}
