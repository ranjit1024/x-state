import { assign, createMachine, setup } from "xstate";

export const feedBackMachine = createMachine({
    id: "feed_back",
  
    context:{
        feedback:"I have on idea",
    },
  
    on: {
        'feedback.update':{
            actions: assign({
                feedback:({event}) => event.feedback})
        }
    }
})