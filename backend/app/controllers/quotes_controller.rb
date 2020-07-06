class QuotesController < ApplicationController
    def index
        quotes = Quote.all 

        render json: quotes
    end

    def show
        quote = Quote.find(params[:id])

        render json: quote
    end

    def create
        quote = Quote.new(quote_params)
        render json: quote.save ? quote : {message: quote.errors.messages}
    end

    private
        def quote_params
            params.require(:quote).permit(:phrase, :category_id)
        end
end
