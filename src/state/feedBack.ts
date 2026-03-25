import { assign, createMachine, setup } from "xstate";

export const feedBackMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QDMyQPoCMCGBjA1gHQAOATgPYC2xALgMSqQ4GFTnkQDaADALqKhi5WAEsaI8gDsBIAB6JuAGhABPBQF91yxhCx4iZKrQZoIzIji58ZQ0eKkz5CALQAOJasQAWAGyatIJIccDI6egQ2wmIS0khyiM4AjABMrspqLq4A7IQArJrapuEGFNQ0kXYxjt7J6YiJXtwFIGHmhMjkpJQV0Q5xTgDMybl1CMNZza36hDQAFtiS+PBxtr2xoIPDow1NAVMsuAA2wpA99uvxCF61nmO5E-5AA */
    id: "feed_back",
  
    context:{
        feedback:"I have on idea",
    },
    initial: "prompt",
    states: {
        prompt:{
            on:{
                'feedback.good':{
                    target:"thanks"
                }, 
                'feedback.bad':{
                    target:"thanks"
                }
            }
        },
        form: {},
        thanks: {},
        closed: {}
    }
})  