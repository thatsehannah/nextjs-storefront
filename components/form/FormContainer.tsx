'use client';

import React, { ReactNode, useEffect, useActionState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { actionFn } from '@/utils/types';

const initialState = {
  message: '',
};

type FormContainerProps = {
  action: actionFn; //action that's going to be invoked when the form is submitted
  children: ReactNode;
};

//looking for the inputs we're going to display and the submit buttons
const FormContainer = ({ action, children }: FormContainerProps) => {
  //the course uses useFormState, however that's been deprecated and useActionState is now used in its place
  //Use useActionState to create component state that is updated when a form action is invoked. Pass it an existing action function, initialstate and it returns a new action that you use in the form
  //The state variable is the value returned by the action when the form was last submitted. If the form has not yet been submitted, it is the initial value state that was passed
  const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        description: state.message,
      });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
