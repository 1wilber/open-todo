import {
  Drawer,
  DrawerBody,
  DrawerContent,
} from "@chakra-ui/react";
import { ActionFunctionArgs } from "@remix-run/node";
import { redirect, useNavigate } from "@remix-run/react";
import { useState } from "react";
import { CreateTodo } from "~/features/todos";
import { supabaseClient } from "~/utils";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()

  try {
    await supabaseClient.from('todos').insert({ todo: formData.get('todo') })
    return redirect('/todos')
  } catch (error) {
    return null
  }
}

export default function Component() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(true)
  const onClose = () => {
    setOpen(false)
    navigate('/todos')
  }
  return (
    <Drawer placement="bottom" isOpen={open} onClose={onClose} >
      <DrawerContent borderTopRadius="lg" >
        <DrawerBody py={5}>
          <CreateTodo />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
