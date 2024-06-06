import styles from "../styles/MissionForm.module.css";

const MissionForm = ({ mission, handleChange, handleSubmit }) => {
  return (
    <div className={styles.container}>
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
            <br />
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
            <br />
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
            <br />
            <input
              type="date"
              name="endDate"
              value={mission.endDate}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default MissionForm;
