import uuidv4 from 'uuid/v4';

const TaskModel = (id, task) => {
  const {
    _id = id || uuidv4(),
    title = '',
    description = '',
    participiants = [],
    address = '',
    latitude = '',
    longitude = '',
    tags = [],
    categories = ['important'],
    date = new Date(),
  } = task;
  return {
    _id,
    title,
    description,
    participiants,
    address,
    latitude,
    longitude,
    tags,
    categories,
    date,
  };
};

export default TaskModel;
