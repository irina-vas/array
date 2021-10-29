'use strict';

const fields = [
  {
    id: 30,
    fieldName: 'Date',
    permissions: {
      view: true,
      edit: true,
      remove: true
    },
    objectRelation: null
  },
  {
    id: 31,
    fieldName: 'Name',
    permissions: {
      view: true,
      edit: false,
      remove: false
    },
    objectRelation: {
      objectId: 12
    }
  },
  {
    id: 32,
    fieldName: 'Time',
    permissions: {
      view: true,
      edit: true,
      remove: false
    },
    objectRelation: {
      objectId: 2
    }
  },
  {
    id: 33,
    fieldName: 'Rating',
    permissions: {
      view: false,
      edit: false,
      remove: false
    },
    objectRelation: {
      objectId: 4
    }
  },
  {
    id: 34,
    fieldName: 'Custom Name',
    permissions: {
      view: true,
      edit: false,
      remove: false
    },
    objectRelation: {
      objectId: 7
    }
  },
  {
    id: 35,
    fieldName: 'Email',
    permissions: {
      view: true,
      edit: true,
      remove: true
    },
    objectRelation: {
      objectId: 19
    }
  },
  {
    id: 36,
    fieldName: 'Decimal',
    permissions: {
      view: true,
      edit: true,
      remove: true
    },
    objectRelation: null
  },
  {
    id: 37,
    fieldName: 'Float',
    permissions: {
      view: true,
      edit: true,
      remove: false
    },
    objectRelation: {
      objectId: 15
    }
  },
  {
    id: 38,
    fieldName: 'Radio',
    permissions: {
      view: false,
      edit: false,
      remove: false
    },
    objectRelation: null
  },
  {
    id: 39,
    fieldName: 'Custom Rating',
    permissions: {
      view: true,
      edit: true,
      remove: true
    },
    objectRelation: {
      objectId: 1
    }
  },
  {
    id: 40,
    fieldName: 'Relation',
    permissions: {
      view: true,
      edit: false,
      remove: false
    },
    objectRelation: {
      objectId: 7
    }
  },
  {
    id: 41,
    fieldName: 'Checkbox',
    permissions: {
      view: true,
      edit: true,
      remove: false
    },
    objectRelation: {
      objectId: 9
    }
  },
  {
    id: 42,
    fieldName: 'Checkboxes',
    permissions: {
      view: true,
      edit: true,
      remove: true
    },
    objectRelation: {
      objectId: 9
    }
  },
  {
    id: 43,
    fieldName: 'Dropdown',
    permissions: {
      view: false,
      edit: false,
      remove: false
    },
    objectRelation: null
  },
  {
    id: 44,
    fieldName: 'Dynamic Tags',
    permissions: {
      view: true,
      edit: false,
      remove: false
    },
    objectRelation: {
      objectId: 17
    }
  },
  {
    id: 45,
    fieldName: 'Files',
    permissions: {
      view: true,
      edit: true,
      remove: true
    },
    objectRelation: {
      objectId: 4
    }
  },
  {
    id: 46,
    fieldName: 'Long Text',
    permissions: {
      view: true,
      edit: true,
      remove: true
    },
    objectRelation: {
      objectId: 20
    }
  },
  {
    id: 47,
    fieldName: 'Phone number',
    permissions: {
      view: true,
      edit: true,
      remove: false
    },
    objectRelation: null
  },
  {
    id: 48,
    fieldName: 'Price',
    permissions: {
      view: false,
      edit: false,
      remove: false
    },
    objectRelation: {
      objectId: 8
    }
  },
  {
    id: 49,
    fieldName: 'Status',
    permissions: {
      view: true,
      edit: true,
      remove: true
    },
    objectRelation: {
      objectId: 12
    }
  },
  {
    id: 50,
    fieldName: 'Text',
    permissions: {
      view: true,
      edit: true,
      remove: true
    },
    objectRelation: {
      objectId: 18
    }
  },
  {
    id: 51,
    fieldName: 'Yes/No',
    permissions: {
      view: true,
      edit: true,
      remove: true
    },
    objectRelation: {
      objectId: 15
    }
  }
];


// 1. Необходимо сформироать массив который будет
// содержать только те поля которые имеют permissions.view:
// true

// const permissionTrue = [...fields].filter(i => i.permissions.view);
// console.log(permissionTrue);

// 2. Необходимо сформировать массив который будет
// содержать только те поля которые имеют все ключи
// пермиссий false

// const permissionsAllFalse = [...fields].filter(i => {
//   return !i.permissions.edit && !i.permissions.remove && !i.permissions.view;
// })

// console.log(permissionsAllFalse );

// 3. Необходимо сформировать массив полей и заменить
// полям которые имеют objectRelation.objectId c айдишника
// объекта на полный объект данных об объекте .
// Взаимодействуем со вторым массивом
