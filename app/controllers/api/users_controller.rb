class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render "api/errors/user_errors", status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password, :first_name, :last_name, :email, :gender, :birthdate, :about )
    end
end
