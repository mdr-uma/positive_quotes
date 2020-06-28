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
            if quote.save
                render json: quote
            end
    end

    # def update
    #     quote = Quote.find(params[:id])
    #     quote.update(quote_params)
    #     render json: quote
    # end

    private
        def quote_params
            params.require(:quote).permit(:pharse, :category, :like)
        end
end
