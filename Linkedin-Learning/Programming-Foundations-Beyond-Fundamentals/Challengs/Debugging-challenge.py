
# -------------------------------------error fixing challange--------------------------------------

def plant_recommendation(care):
    # first error syntax error
    # if care = 'low':
    if care == 'low':
        print('aloe')
    elif care == 'medium':
        print('pothos')
    # second error (logic error)
    # elif care == 'medium':
    elif care == 'high':
        print('orchid')


# third error (logic error)
# plant_rec('low')
plant_recommendation('low')

plant_recommendation('medium')
plant_recommendation('high')
