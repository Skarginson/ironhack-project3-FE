const MissionForm = ({ mission, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={mission.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            name="description"
            value={mission.description}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={mission.startDate}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={mission.endDate}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default MissionForm;
