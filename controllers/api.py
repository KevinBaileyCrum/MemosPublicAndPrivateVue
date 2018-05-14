# Here go your api methods.

@auth.requires_signature()
def addMemo():
    t_id = db.checklist.insert(
        title = request.vars.title,
        text  = request.vars.text
    )
    return response.json(dict(checklist=dict(
        id = t_id,
        title = request.vars.title,
        text  = request.vars.text
    )))
