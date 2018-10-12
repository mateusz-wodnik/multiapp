import uuidv4 from 'uuid/v4';

const TaskModel = (id, task) => {
  const {
    _id = id || uuidv4(),
    title = '',
    description = '',
    participiants = [], // TODO Implement add/remove users through server requests
    address = '', // TODO Add place selectiot by map/search
    latitude = '', // TODO Add place selectiot by map/search
    longitude = '', // TODO Add place selectiot by map/search
    tags = [],
    categories = ['important'],
    date = new Date(),
  } = task;
  return {
    _id,
    title,
    description,
    participiants, // TODO Implement add/remove users through server requests
    address, // TODO Add place selectiot by map/search
    latitude, // TODO Add place selectiot by map/search
    longitude, // TODO Add place selectiot by map/search
    tags,
    categories,
    date,
  };
};

export default TaskModel;
