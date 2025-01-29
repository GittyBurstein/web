const ValidateTaskMiddleWare=store=>next=>action=>
{
    if(action.type=='ADDITION')
       if(action.payload=="")
        return;
   next(action);
};

export default ValidateTaskMiddleWare;