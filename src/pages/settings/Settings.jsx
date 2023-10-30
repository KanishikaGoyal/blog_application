import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
    <div className='settingWrapper'>
        <div className='settingsTitle'>
            <span className='settingsTitleUpdate'>Update Your Account</span>
            <span className='settingsTitleDelete'> Delete Account</span>
        </div>
        <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className='settingsPP'>
                <img src="https://cdn2.iconfinder.com/data/icons/random-outline-3/48/random_14-512.png" alt=' '/>
                <label htmlFor='fileInput'>
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
    </div>
    </div>
  )
}
