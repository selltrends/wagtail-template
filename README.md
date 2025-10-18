# Wagtail Template + (Vite + Tailwindcss + Daisyui + Flowbite + Aphine + Storybook)


## Wagtail Developing Set

1. **Create a Virtual Environment**: Set up a virtual environment to isolate your project dependencies. These instructions are for GNU/Linux or MacOS, but there are [other operating systems in the Wagtail docs](https://docs.wagtail.org/en/stable/getting_started/tutorial.html#create-and-activate-a-virtual-environment).

   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```

2. **Navigate to Project Directory**: Move into the newly created project directory.

   ```bash
   cd myproject
   ```

3. **Install Wagtail**: Install the Wagtail CMS package using pip.

   ```bash
   pip install wagtail
   ```

4. **Initialize Project**: Use the `wagtail start` command to create a new project based on the Wagtail Starter Kit template.

   ```bash
   wagtail start --template=https://github.com/selltrends/wagtail-template/archive/refs/heads/main.zip myproject .
   ```

5. **Install Project Dependencies**: Install the project's dependencies into a virtual environment.

   ```bash
   pip install -r requirements.txt
   ```

## Load Fixture Datat

All commands from now on should be run from inside the virtual environment.

1. **Load Dummy Data**: Load in some dummy data to populate the site with some content.

   ```bash
   make load-data
   ```

2. **Start the Server**: Start the Django development server.

   ```bash
   make start
   ```

3. **Access the Site and Admin**: Once the server is running, you can view the site at `localhost:8000` and access the Wagtail admin interface at `localhost:8000/admin`. Log in with the default credentials provided by :

    - Username: admin
    - Password: password


### Local Developing Precess

1.  **Original Code Zip**: Zip the source template codes for new project.

   ```bash
   cd .. 
   zip -r template.zip wagtail-tempalte
   ```



2.  **Local Install Test**: Use the `wagtail start` command to create a new project based on the local Wagtail Starter Kit template.

   ```bash
   mkdir myproject && cd $_
   python3 -m venv .venv
   source .venv/bin/activate
   pip install --upgrade pip
   pip install wagtail
   wagtail start --template=../template.zip myproject .
   pip install -r requirements.txt
   python manage.py makemigrations
   python manage.py migrate --run-syncdb 
   python manage.py createcachetable
   python manage.py createsuperuser
   python manage.py runserver
   ```

3. **Frontend Developing Process**:
   ```bash
   npm install 
   npm run build
   npm run dev
   ```
4. **Collectstatic or Django Vite Assets Not Found Error**:
   ```bash
    python manage.py collectstatic
    ```
### Deploying

todo