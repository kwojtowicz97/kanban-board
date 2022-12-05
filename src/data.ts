export enum Priority {
  LOW = 'green',
  MEDIUM = 'orange',
  HIGH = 'red',
}

export const data = [
  {
    projectName: 'First project',
    lists: [
      {
        badgeColor: '#5ca05c',
        badge: 'Open',
        isCollapsed: false,
        isColorWheelShown: false,
        tasks: [
          {
            title: 'First task',
            date: '22-11-2022',
            priority: Priority.HIGH,
            list: 'Open',
          },
        ],
      },
      {
        badgeColor: 'lightblue',
        badge: 'In progress',
        isCollapsed: false,
        isColorWheelShown: false,
        tasks: [
          {
            title: 'Second task',
            date: '22-11-2022',
            priority: Priority.LOW,
            list: 'In progress',
          },
          {
            title: 'Test task',
            date: '22-11-2022',
            priority: Priority.LOW,
            list: 'In progress',
          },
        ],
      },
      {
        badgeColor: 'gray',
        badge: 'Testing',
        isCollapsed: false,
        isColorWheelShown: false,
        tasks: [
          {
            title: 'Third task',
            date: '22-11-2022',
            priority: Priority.MEDIUM,
            list: 'Testing',
          },
        ],
      },
    ],
  },
]
