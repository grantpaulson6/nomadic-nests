# Nomadic Nests | [Live](https://nomadic-nests.herokuapp.com/#/)

This web app emulates Airbnb with a personal spin - the "nests" or rentable places are locations the creator and his wife visited during their travels.  Built using React/Redux with Ruby on Rails powering the backend.

## Key Feautures

Search nests based on desired criteria; search bar eagerly loads data for searchable options that appears as a drop-down list of available options that match user input.

![](https://media.giphy.com/media/mFr1EAepFd5bLMldd0/giphy.gif)

Filter nests based on desired criteria; filter bar updates frontend state and initiates new data fetching that includes desired criteria.  

![](https://media.giphy.com/media/Y42ie4VN0Vu3M2K16K/giphy.gif)

Filter nests based on map interaction; a checkbox option on the map allows users to fetch data as they move the map boundaries. Infinite scroll allows the user to fetch more data as they need without requesting exorbitant quantities of data upfront.

![](https://media.giphy.com/media/RfLwsn63iV9nwRUyVh/giphy.gif)

Create bookings for locations for specific dates.

![](https://media.giphy.com/media/fXsmKkt8T3fnwss1o6/giphy.gif)

User authentication; BCrypt is utilized so that plain-text passwords are never stored.  Sessions are created and login credentials are bootstrapped for a seamless user experience

```c#
    after_initialize :ensure_session_token!
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.valid_password?(password)
            return user
        end
        nil
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token!
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        while User.find_by(session_token: self.session_token)
            self.session_token = SecureRandom.urlsafe_base64
        end
        self.save!
        self.session_token
    end
```

## Data management

Similar to a site with a much larger database, the search functionality always queries the database for a filtered and reduced set of data.  This would make the app more scalable for large quantities of data.  Additionally, use of the Rails includes function eliminates N + 1 queries and keeps the backend optimized.

## UI

Like Airbnb, Nomadic Nets keeps the layout simple, clean, and minimalist.  The search field in the navigation bar and a dynamic filter bar allow for quick navigation.  A toggle on/off option for the map display allows the user to browse the data in either a geographic or data-driven way.

## Features in Development

Animation for loading listings
